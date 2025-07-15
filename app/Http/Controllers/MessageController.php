<?php

namespace App\Http\Controllers;

use App\Http\Resources\MessageResource;
use App\Models\Message;
use App\Notifications\MessageSent;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    public function index(): Response
    {
        $paginator = Message::latest()->paginate(10);
        $collection = $paginator->getCollection()->map(fn ($m) => (new MessageResource($m))->toArray(request()));
        $paginator->setCollection(collect($collection));

        return Inertia::render('contact/index', [
            'messages' => $paginator,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('contact/create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'text' => ['required', 'string'],
        ]);

        Message::create([
            ...$validated,
            'slug' => \Str::slug($validated['name'] . '-' . now()->timestamp),
        ]);

        Notification::route('mail', 'TWÓJ_EMAIL@domena.pl')
            ->notify(new MessageSent());

        return redirect()->back()->with('success', 'Dziękujemy za Twoją wiadomość! Skontaktujemy się z Tobą tak szybko, jak to możliwe.');
    }

    public function show(Message $message): Response
    {
        $message->read = true;
        $message->save();
        return Inertia::render('contact/show', [
            'message' => new MessageResource($message),
        ]);
    }

    public function markAsRead(Message $message): RedirectResponse
    {
        $message->update(['read' => true]);

        return redirect()->back()->with('success', 'Wiadomość oznaczona jako przeczytana.');
    }

    public function destroy(Message $message): RedirectResponse
    {
        $message->delete();

        return redirect()->route('admin.messages.index')
            ->with('success', 'Wiadomość została usunięta.');
    }
}

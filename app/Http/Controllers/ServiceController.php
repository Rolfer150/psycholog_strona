<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Http\Resources\ServiceResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    // Admin (auth) wersja listy usług
    public function index(): Response
    {
        $services = Service::latest()->get();

        return Inertia::render('services/index', [
            'services' => ServiceResource::collection($services)->resolve(),
        ]);
    }

    // Publiczna wersja listy usług
    public function public(): Response
    {
        $services = Service::latest()->get();

        return Inertia::render('services/public', [
            'services' => ServiceResource::collection($services)->resolve(),
        ]);
    }

    // Formularz dodawania
    public function create(): Response
    {
        return Inertia::render('services/create');
    }

    // Zapis nowej usługi
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:128'],
            'description' => ['nullable', 'string'],
            'price' => ['required', 'numeric', 'min:0'],
        ]);

        $validated['slug'] = Str::slug($validated[preg_replace('/\s+/', '-', strtolower('name'))]);

        Service::create($validated);

        return redirect()->route('services.index')->with('success', 'Usługa została dodana.');
    }

    // Formularz edycji z ServiceResource
    public function edit(Service $service): Response
    {
        return Inertia::render('services/edit', [
            'service' => new ServiceResource($service),
        ]);
    }

    // Aktualizacja usługi
    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'price' => ['required', 'numeric', 'min:0'],
        ]);

        $service->update($validated);

        return redirect()->route('services.index')->with('success', 'Usługa została zaktualizowana.');
    }

    // Usunięcie usługi
    public function destroy(Service $service)
    {
        $service->delete();

        return redirect()->route('services.index')->with('success', 'Usługa została usunięta.');
    }
}

<?php

use App\Models\Service;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

beforeEach(function () {
    Storage::fake('public');
});

it('can create a service with fillable attributes', function () {
    $service = Service::create([
        'name' => 'Masaż',
        'slug' => 'masaz',
        'short_description' => 'Relaksujący masaż',
        'description' => 'Opis dłuższy...',
        'image_path' => 'images/masaz.jpg',
        'price' => 100.50
    ]);

    expect($service)->toBeInstanceOf(Service::class)
        ->and($service->name)->toBe('Masaż')
        ->and($service->price)->toBe(100.50);
});

it('returns correct image URL for local path', function () {
    $service = new Service(['image_path' => 'images/test.jpg']);
    expect($service->getURLImage())->toBe('/storage/images/test.jpg');
});

it('returns correct image URL for external http path', function () {
    $url = 'http://example.com/image.jpg';
    $service = new Service(['image_path' => $url]);
    expect($service->getURLImage())->toBe($url);
});

it('returns null image URL when image_path is null', function () {
    $service = new Service(['image_path' => null]);
    expect($service->getURLImage())->toBeNull();
});

it('formats the price with comma and zł suffix', function () {
    $service = new Service(['price' => 120.99]);
    expect($service->getPrice())->toBe('120,99 zł');
});

it('deletes old image when image_path is updated', function () {
    $oldPath = 'old.jpg';
    $newPath = 'new.jpg';

    // utwórz plik "na dysku"
    Storage::disk('public')->put($oldPath, 'fake content');

    $service = Service::create([
        'name' => 'Test',
        'slug' => 'test',
        'image_path' => $oldPath,
        'price' => 10,
    ]);

    // zaktualizuj image_path
    $service->update(['image_path' => $newPath]);

    Storage::disk('public')->assertMissing($oldPath);
});

it('deletes image from disk when service is deleted', function () {
    $path = 'service.jpg';
    Storage::disk('public')->put($path, 'fake content');

    $service = Service::create([
        'name' => 'Test',
        'slug' => 'test',
        'image_path' => $path,
        'price' => 10,
    ]);

    $service->delete();

    Storage::disk('public')->assertMissing($path);
});

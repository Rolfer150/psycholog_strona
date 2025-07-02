<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Service extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'image', 'price'];

    // Obsługuje zdarzenia modelu: usuwanie pliku obrazka po usunięciu rekordu oraz usuwanie starego obrazka przed aktualizacją
    protected static function booted(): void
    {
        static::deleted(function (Service $service) {
            Storage::delete("public/$service->image_path");
        });

        static::updating(function (Service $service) {
            $originalImg = $service->getOriginal('image_path');

            if ($originalImg != $service->image_path ) Storage::delete("public/$originalImg");
        });
    }

    // Zwraca pełny URL do obrazka usługi, obsługując zarówno pełne linki, jak i ścieżki lokalne
    public function getURLImage()
    {
        if (str_starts_with($this->image_path, 'http')) {
            return $this->image_path;
        }
        return '/storage/' . $this->image_path;
    }

    // Formatuje cenę do postaci tekstowej z przecinkiem jako separatorem dziesiętnym oraz dodaje symbol złotówki
    public function getPrice(): string
    {
        return str_replace('.', ',', $this->price) . ' zł';
    }
}

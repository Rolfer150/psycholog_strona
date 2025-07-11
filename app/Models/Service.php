<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Service extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'image_path', 'price'];

    protected static function booted(): void
    {
        static::deleted(function (Service $service) {
            if ($service->image_path) {
                Storage::disk('public')->delete($service->image_path);
            }
        });

        static::updating(function (Service $service) {
            $originalImg = $service->getOriginal('image_path');

            if ($originalImg && $originalImg !== $service->image_path) {
                Storage::disk('public')->delete($originalImg);
            }
        });
    }

    public function getURLImage()
    {
        if (str_starts_with($this->image_path, 'http')) {
            return $this->image_path;
        }
        return '/storage/' . $this->image_path;
    }

    public function getPrice(): string
    {
        return str_replace('.', ',', $this->price) . ' zł';
    }
}

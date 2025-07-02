<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'          => $this->id,
            'name'        => $this->name,
            'slug'        => $this->slug,
            'description' => $this->description,
            'price' => $this->getPrice(), // użycie metody z modelu
            'image_url' => $this->getURLImage(), // też z modelu
        ];
    }
}

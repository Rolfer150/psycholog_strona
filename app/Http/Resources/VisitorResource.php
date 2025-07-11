<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VisitorResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'ip_address' => $this->ip_address,
            'user_agent' => $this->user_agent,
            'visited_at' => $this->visited_at->format('Y-m-d H:i:s'),
        ];
    }
}

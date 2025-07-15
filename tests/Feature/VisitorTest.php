<?php

it('has visitor page', function () {
    $response = $this->get('/visitor');

    $response->assertStatus(200);
});

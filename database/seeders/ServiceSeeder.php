<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    private array $serviceName = [
        0 => 'Konsultacja psychologiczna',
        1 => 'Konsultacja psychologiczna online',
        2 => 'Poradnictwo psychologiczne',
        3 => 'Pomoc psychologiczna',
        4 => 'Porada psychologiczna',
        5 => 'Psychological consultation in English',
    ];

    public function run(): void
    {
        Service::truncate();

        $services = [
            [
                'name' => $this->serviceName[0],
                'slug' => Str::slug($this->serviceName[0]),
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Konsultacja psychologiczna</strong> to spotkanie z psychologiem, które ma na celu omówienie aktualnych trudności, uzyskanie wsparcia oraz wstępną ocenę sytuacji. To dobry moment, by przyjrzeć się swoim emocjom, relacjom i przeżyciom, a także poszukać możliwych rozwiązań.</p>
                        <p>Konsultacja trwa zazwyczaj 50 minut i może mieć charakter jednorazowy lub stanowić wstęp do dłuższej terapii.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-teal-400 ml-6 space-y-1">
                            <li>dla osób przeżywających trudne emocje, lęki, napięcia,</li>
                            <li>dla tych, którzy doświadczają kryzysu w relacjach, pracy lub życiu osobistym,</li>
                            <li>dla osób chcących lepiej zrozumieć siebie i swoje potrzeby.</li>
                        </ul>
                        <p>Konsultacja psychologiczna to pierwszy krok w kierunku zmiany i poprawy jakości życia.</p>
                    </div>
                ',
                'image_path' => fake()->imageUrl(),
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[1],
                'slug' => Str::slug($this->serviceName[1]),
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Konsultacja psychologiczna online</strong> to bezpieczne i wygodne spotkanie z psychologiem, które odbywa się za pośrednictwem Internetu — z dowolnego miejsca na świecie. Podczas konsultacji możesz porozmawiać o trudnościach, których doświadczasz, uzyskać wsparcie emocjonalne, a także wstępne wskazówki dotyczące dalszego postępowania terapeutycznego.</p>
                        <p>Spotkanie online trwa zazwyczaj 50 minut i odbywa się na platformie wideorozmów (np. Zoom, Google Meet). Konsultacja może być jednorazowa lub stanowić początek dłuższej współpracy terapeutycznej.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-teal-400 ml-6 space-y-1">
                            <li>dla osób zmagających się ze stresem, lękiem, obniżonym nastrojem,</li>
                            <li>dla tych, którzy przechodzą kryzys życiowy lub zawodowy,</li>
                            <li>dla osób potrzebujących rozmowy, uporządkowania myśli i emocji.</li>
                        </ul>
                        <p><strong>Zalety konsultacji online:</strong></p>
                        <ul class="list-disc marker:text-teal-400 ml-6 space-y-1">
                            <li>dostępność niezależnie od miejsca zamieszkania,</li>
                            <li>oszczędność czasu,</li>
                            <li>dyskrecja i komfort własnej przestrzeni.</li>
                        </ul>
                    </div>
                ',
                'image_path' => fake()->imageUrl(),
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[2],
                'slug' => Str::slug($this->serviceName[2]),
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Poradnictwo psychologiczne</strong> to forma wsparcia skierowana do osób, które chcą lepiej radzić sobie z codziennymi wyzwaniami, trudnościami w relacjach, stresem lub zmianami życiowymi. Celem poradnictwa jest wspólne poszukiwanie rozwiązań oraz wzmocnienie zasobów i umiejętności radzenia sobie.</p>
                        <p>Spotkanie trwa zazwyczaj 50 minut i może obejmować jedno lub kilka spotkań, w zależności od potrzeb.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-teal-400 ml-6 space-y-1">
                            <li>dla osób doświadczających trudności w relacjach osobistych lub zawodowych,</li>
                            <li>dla tych, którzy stoją przed ważnymi decyzjami życiowymi,</li>
                            <li>dla osób potrzebujących wsparcia w adaptacji do nowych sytuacji.</li>
                        </ul>
                        <p>Poradnictwo psychologiczne pomaga spojrzeć na sytuację z nowej perspektywy i znaleźć praktyczne sposoby działania.</p>
                    </div>
                ',
                'image_path' => fake()->imageUrl(),
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[3],
                'slug' => Str::slug($this->serviceName[3]),
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Pomoc psychologiczna</strong> to forma profesjonalnego wsparcia udzielana osobom, które zmagają się z trudnościami emocjonalnymi, kryzysami życiowymi lub potrzebują bezpiecznej przestrzeni do rozmowy. Celem pomocy psychologicznej jest złagodzenie cierpienia, poprawa funkcjonowania oraz wzmocnienie zasobów wewnętrznych.</p>
                        <p>Spotkanie trwa zazwyczaj 50 minut i może mieć charakter jednorazowy lub cykliczny.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-teal-400 ml-6 space-y-1">
                            <li>dla osób doświadczających lęku, smutku, napięcia,</li>
                            <li>dla tych, którzy znajdują się w kryzysie emocjonalnym lub przeżywają stratę,</li>
                            <li>dla każdego, kto potrzebuje zrozumienia i profesjonalnego wsparcia.</li>
                        </ul>
                        <p>Pomoc psychologiczna to pierwszy krok w kierunku odzyskania równowagi i poczucia bezpieczeństwa.</p>
                    </div>
                ',
                'image_path' => fake()->imageUrl(),
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[4],
                'slug' => Str::slug($this->serviceName[4]),
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Porada psychologiczna</strong> to krótkoterminowa forma wsparcia, której celem jest pomoc w zrozumieniu konkretnego problemu i znalezieniu możliwych rozwiązań. Spotkanie z psychologiem pozwala spojrzeć na trudności z innej perspektywy, uporządkować myśli i uzyskać wstępne wskazówki do dalszego działania.</p>
                        <p>Sesja trwa zazwyczaj 50 minut i może być jednorazowa lub stanowić wstęp do dalszej pracy psychologicznej.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-teal-400 ml-6 space-y-1">
                            <li>dla osób stojących przed ważną decyzją,</li>
                            <li>dla tych, którzy chcą skonsultować sytuację życiową lub relacyjną,</li>
                            <li>dla osób potrzebujących wskazówek, jak poradzić sobie w konkretnej sytuacji.</li>
                        </ul>
                        <p>Porada psychologiczna to szybka i dostępna forma wsparcia w codziennych trudnościach.</p>
                    </div>
                ',
                'image_path' => fake()->imageUrl(),
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[5],
                'slug' => Str::slug($this->serviceName[5]),
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Psychological consultation</strong> is a professional meeting aimed at discussing current difficulties, gaining emotional support, and receiving an initial assessment of your situation. It is an opportunity to explore your feelings, relationships, and experiences, and to look for possible solutions.</p>
                        <p>The consultation typically lasts 50 minutes and can be a one-time session or the beginning of ongoing therapy.</p>
                        <p><strong>Who is it for?</strong></p>
                        <ul class="list-disc marker:text-teal-400 ml-6 space-y-1">
                            <li>Individuals experiencing stress, anxiety, or emotional tension,</li>
                            <li>Those going through personal or professional crises,</li>
                            <li>People seeking better understanding of themselves and their needs.</li>
                        </ul>
                        <p>Psychological consultation is the first step towards positive change and improved well-being.</p>
                    </div>
                ',
                'image_path' => fake()->imageUrl(),
                'price' => 220,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}

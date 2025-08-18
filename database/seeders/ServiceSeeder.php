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
        2 => 'Psychologiczne wsparcie doradcze',
        3 => 'Wsparcie psychologiczne w kryzysie',
        4 => 'Szybka konsultacja psychologiczna',
        5 => 'Psychological consultation in English',
    ];

    public function run(): void
    {
        Service::truncate();

        $services = [
            [
                'name' => $this->serviceName[0],
                'slug' => Str::slug($this->serviceName[0]),
                'short_description' => 'Pierwsze spotkanie z psychologiem, które pomoże zrozumieć trudności, uzyskać wsparcie i podjąć dalsze kroki ku poprawie samopoczucia.',
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Konsultacja psychologiczna</strong> to indywidualne spotkanie z psychologiem, które ma na celu omówienie Twoich aktualnych trudności, emocji i sytuacji życiowej. To przestrzeń, w której możesz poczuć się wysłuchany i zrozumiany, a także uzyskać pierwsze wskazówki dotyczące dalszego postępowania.</p>
                        <p>Konsultacja trwa zazwyczaj 50 minut i może mieć charakter jednorazowy lub być początkiem dłuższej współpracy terapeutycznej.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-brown-400 ml-6 space-y-1">
                            <li>dla osób doświadczających stresu, niepokoju lub obniżonego nastroju,</li>
                            <li>dla tych, którzy przeżywają trudności w relacjach osobistych lub zawodowych,</li>
                            <li>dla osób poszukujących wsparcia w rozwiązywaniu problemów emocjonalnych i życiowych.</li>
                        </ul>
                        <p>Konsultacja psychologiczna to ważny krok w kierunku lepszego zrozumienia siebie i poprawy jakości życia.</p>
                    </div>
                ',
                'image_path' => null,
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[1],
                'slug' => Str::slug($this->serviceName[1]),
                'short_description' => 'Wygodna konsultacja z psychologiem online — z dowolnego miejsca. Pomaga uporać się z trudnościami, stresem i emocjami, oferując wsparcie i pierwsze wskazówki terapeutyczne.',
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Konsultacja psychologiczna online</strong> to wygodne i bezpieczne spotkanie z psychologiem przez Internet, które możesz odbyć z dowolnego miejsca – domu, pracy czy podróży. To forma dostosowana do Twoich potrzeb i rytmu życia.</p>
                        <p>Podczas sesji online masz możliwość omówienia swoich trudności, otrzymania wsparcia emocjonalnego oraz wstępnej diagnozy bez konieczności wychodzenia z domu.</p>
                        <p><strong>Długość i przebieg:</strong> Konsultacja trwa zwykle 50 minut i odbywa się na wybranej platformie do wideorozmów (np. Zoom, Google Meet).</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-brown-400 ml-6 space-y-1">
                            <li>dla osób ceniących wygodę i elastyczność,</li>
                            <li>dla tych, którzy mają ograniczony dostęp do gabinetu psychologa,</li>
                            <li>dla osób z obszarów o utrudnionym dostępie do specjalistów,</li>
                            <li>dla osób w sytuacjach wymagających szybkiego wsparcia bez wychodzenia z domu.</li>
                        </ul>
                        <p>Konsultacja psychologiczna online to skuteczna i komfortowa forma pomocy psychologicznej dostosowana do współczesnych potrzeb.</p>
                    </div>
                ',
                'image_path' => null,
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[2],
                'slug' => Str::slug($this->serviceName[2]),
                'short_description' => 'Wsparcie w radzeniu sobie z codziennymi wyzwaniami, stresem i zmianami życiowymi. Pomaga lepiej zrozumieć sytuację i znaleźć skuteczne rozwiązania.',
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Psychologiczne wsparcie doradcze</strong> to specjalistyczna pomoc skoncentrowana na rozwiązywaniu konkretnych problemów oraz wspieraniu w podejmowaniu ważnych decyzji życiowych i zawodowych.</p>
                        <p>Podczas spotkań doradczych psycholog pomaga spojrzeć na sytuację z różnych perspektyw, identyfikuje przeszkody i zasoby oraz wspólnie z Tobą szuka praktycznych rozwiązań.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-brown-400 ml-6 space-y-1">
                            <li>dla osób stojących przed ważnymi wyborami życiowymi lub zawodowymi,</li>
                            <li>dla tych, którzy chcą lepiej zarządzać stresem i emocjami w sytuacjach wymagających decyzji,</li>
                            <li>dla osób potrzebujących wsparcia w rozwiązywaniu konfliktów i problemów interpersonalnych.</li>
                        </ul>
                        <p>Wsparcie doradcze to praktyczna pomoc psychologiczna, która ułatwia podejmowanie świadomych i wartościowych decyzji.</p>
                    </div>
                ',
                'image_path' => null,
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[3],
                'slug' => Str::slug($this->serviceName[3]),
                'short_description' => 'Profesjonalne wsparcie w trudnych momentach życia. Pomaga złagodzić cierpienie, odzyskać równowagę i wzmocnić wewnętrzne zasoby w bezpiecznej, wspierającej atmosferze.',
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Wsparcie psychologiczne w kryzysie</strong> to pomoc skierowana do osób doświadczających nagłych, trudnych sytuacji życiowych, które powodują silny stres, poczucie bezradności lub zagrożenia.</p>
                        <p>Podczas spotkań oferuję bezpieczną przestrzeń do wyrażenia emocji, zrozumienia sytuacji oraz znalezienia sposobów radzenia sobie z kryzysem.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-brown-400 ml-6 space-y-1">
                            <li>dla osób po utracie bliskiej osoby,</li>
                            <li>dla tych, którzy doświadczyli traumatycznych wydarzeń,</li>
                            <li>dla osób przeżywających kryzys emocjonalny, zawodowy lub życiowy,</li>
                            <li>dla osób potrzebujących natychmiastowego wsparcia psychologicznego.</li>
                        </ul>
                        <p>Wsparcie w kryzysie pomaga odzyskać stabilność emocjonalną i znaleźć kierunek dalszych działań.</p>
                    </div>
                ',
                'image_path' => null,
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[4],
                'slug' => Str::slug($this->serviceName[4]),
                'short_description' => 'Krótkoterminowe wsparcie pomagające zrozumieć problem i znaleźć rozwiązania. Idealne dla osób szukających wskazówek i nowej perspektywy w trudnej sytuacji.',
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Szybka konsultacja psychologiczna</strong> to krótka, intensywna sesja przeznaczona dla osób potrzebujących szybkiej pomocy, wsparcia lub porady w konkretnej sytuacji.</p>
                        <p>Spotkanie trwa około 30 minut i pozwala na szybkie omówienie problemu, uzyskanie wskazówek oraz ustalenie dalszych kroków.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-brown-400 ml-6 space-y-1">
                            <li>dla osób potrzebujących natychmiastowego wsparcia psychologicznego,</li>
                            <li>dla tych, którzy chcą szybko skonsultować sytuację lub uzyskać poradę,</li>
                            <li>dla osób, które nie mogą od razu podjąć dłuższej terapii, ale potrzebują pomocy „tu i teraz”.</li>
                        </ul>
                        <p>Szybka konsultacja to efektywna forma wsparcia w nagłych lub krótkoterminowych potrzebach.</p>
                    </div>
                ',
                'image_path' => null,
                'price' => 150,
            ],
            [
                'name' => $this->serviceName[5],
                'slug' => Str::slug($this->serviceName[5]),
                'short_description' => 'A professional session to discuss challenges, gain support, and explore solutions. The first step toward better understanding yourself and improving your well-being.',
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Psychological consultation in English</strong> offers professional psychological support for English-speaking clients seeking help in a comfortable and confidential setting.</p>
                        <p>The consultation typically lasts 50 minutes and can be a one-time session or the start of ongoing therapeutic work.</p>
                        <p><strong>Who is it for?</strong></p>
                        <ul class="list-disc marker:text-brown-400 ml-6 space-y-1">
                            <li>for individuals experiencing stress, anxiety, or emotional challenges,</li>
                            <li>for those going through personal or professional crises,</li>
                            <li>for people seeking to better understand themselves and their needs in English.</li>
                        </ul>
                        <p>Psychological consultation in English is a supportive step towards improved well-being and personal growth.</p>
                    </div>
                ',
                'image_path' => null,
                'price' => 220,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}

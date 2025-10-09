<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    private array $serviceName = [
        0 => 'Konsultacja Psychologiczna - dla osób dorosłych',
        1 => 'Psychoterapia Indywidualna - dla osób dorosłych',
    ];

    public function run(): void
    {
        Service::truncate();

        $services = [
            [
                'name' => $this->serviceName[0],
                'slug' => Str::slug($this->serviceName[0]),
                'short_description' => 'Spotkanie pozwalające przyjrzeć się swojej sytuacji, uzyskać zrozumienie i wskazówki, jak poradzić sobie z bieżącymi trudnościami.',
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Konsultacja psychologiczna</strong> to jedno lub kilka spotkań mających na celu lepsze zrozumienie Twojej sytuacji i określenie, jakiego rodzaju wsparcie będzie dla Ciebie najbardziej pomocne.</p>
                        <p>Podczas rozmowy wspólnie analizujemy aktualne trudności, emocje i okoliczności, które wpływają na Twoje samopoczucie. Konsultacja nie jest terapią, ale może być wstępem do niej – to czas na zrozumienie, co się dzieje, i zaplanowanie pierwszych kroków ku zmianie.</p>
                        <p><strong>Długość spotkania:</strong> 50 minut.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-brown-400 ml-6 space-y-1">
                            <li>dla osób, które stoją w obliczu konkretnej trudności lub decyzji,</li>
                            <li>dla tych, którzy chcą zrozumieć źródło swojego stresu lub niepokoju,</li>
                            <li>dla osób szukających krótkoterminowego wsparcia psychologicznego,</li>
                            <li>dla tych, którzy chcą sprawdzić, czy psychoterapia to odpowiednia forma pomocy.</li>
                        </ul>
                        <p>Konsultacja to pierwszy krok w kierunku lepszego zrozumienia siebie i znalezienia skutecznych rozwiązań.</p>
                    </div>
                ',
                'image_path' => null,
                'price' => 180,
            ],
            [
                'name' => $this->serviceName[1],
                'slug' => Str::slug($this->serviceName[1]),
                'short_description' => 'Regularne spotkania terapeutyczne, które pomagają w głębszym zrozumieniu siebie, emocji i relacji z innymi.',
                'description' => '
                    <div class="space-y-4 text-justify">
                        <p><strong>Psychoterapia indywidualna</strong> to proces regularnych spotkań z terapeutą, ukierunkowany na lepsze zrozumienie siebie, swoich emocji i wzorców zachowania. To bezpieczna przestrzeń, w której możesz pracować nad trwałą zmianą w sposobie myślenia, przeżywania i funkcjonowania w relacjach.</p>
                        <p>Terapeuta towarzyszy Ci w odkrywaniu źródeł trudności, wspiera w przepracowywaniu doświadczeń oraz pomaga w budowaniu większej samoświadomości i odporności emocjonalnej. Proces terapii przebiega w indywidualnym tempie i dostosowany jest do Twoich potrzeb.</p>
                        <p><strong>Długość spotkania:</strong> 50 minut.</p>
                        <p><strong>Dla kogo?</strong></p>
                        <ul class="list-disc marker:text-brown-400 ml-6 space-y-1">
                            <li>dla osób zmagających się z trudnościami emocjonalnymi lub niskim poczuciem własnej wartości,</li>
                            <li>dla tych, którzy doświadczają powtarzających się problemów w relacjach,</li>
                            <li>dla osób przeżywających żałobę, kryzys lub traumę,</li>
                            <li>dla tych, którzy chcą lepiej rozumieć siebie i wprowadzać trwałe zmiany w życiu.</li>
                        </ul>
                        <p>Psychoterapia indywidualna to proces prowadzący do głębszego wglądu, większej równowagi emocjonalnej i poczucia wewnętrznej spójności.</p>
                    </div>
                ',
                'image_path' => null,
                'price' => 180,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}

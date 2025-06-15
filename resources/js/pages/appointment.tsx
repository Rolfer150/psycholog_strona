import Navbar from '@/components/home-components/navbar';

export default function Appointment() {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <h1>Umów wizytę już teraz</h1>
                <div className='bg-teal-400'>
                    <form>
                        <label for='name'>Imię i nazwisko</label>
                        <input type='text' id='name'></input>

                        <label for='email'>Adres e-mail</label>
                        <input type='email' id='email'></input>
                    </form>
                </div>
            </div>
        </>
    );
}

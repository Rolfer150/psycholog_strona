export default function Footer() {
    return(
        <footer className="bg-zinc-700 text-zinc-100 p-4">
            <div className="p-8 flex justify-between text-center">
                <div className="w-1/3">
                    <h2 className="text-2xl">Jakub Chrobak</h2>
                    <h2 className="text-2xl">Psycholog</h2>
                </div>
                <address className="flex w-1/3 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6 mr-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <a href="https://www.google.com/maps/place/Krakowska+66,+34-400+Nowy+Targ/@49.4958829,20.0037306,17z/data=!3m1!4b1!4m6!3m5!1s0x4715e46681d6d6c7:0x28f52921c212259d!8m2!3d49.4958829!4d20.0063109!16s%2Fg%2F11csl4q4lr?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D">
                        Nowy Targ, ul. Krakowska 66
                    </a>
                </address>
                <div className="w-1/3 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6 mr-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    <a href="tel:123 456 789">123 456 789</a>
                </div>
            </div>
            <p className="text-center text-sm p-4 mt-4">© 2025 mgr Jakub Chrobak Psycholog. Wszelkie prawa zastrzeżone.</p>
        </footer>
    );
}

# webtravel_275 
Web aplikacija za portal turističke agencije.<br/>
Tehnologije korištene: React (frontend), Node.js (backend), Express, MySQL (baza podataka) <br />
## Konfiguracija 
Instaliranje npm paketa u frontend folderu: <br />
cd frontend && npm install<br />
Instaliranje npm paketa u backend folderu: <br />
cd backend && npm install<br />
Pokrenite Vaš MySQL server 
## Opis aplikacije 
Ova aplikacija sadrži sljedeće funkcionalnosti:<br />
Postoje dvije korisničke uloge: Admin i User<br />
admin : 
- upravlja korisnicima i oglasima za aktuelna putovanja
- može dodati nove korisnike,
- mijenjati podatke za već unesene korisnike
- stavljati korisnike u neaktivni status (umjesto brisanja).
- može dodavati nova putovanja,
- mijenjati već postojeća putovanja i brisati putovanja.
- ima pristup postavljenim pitanjima na putovanja koje su postavili korisnici
sa ulogom user, te ih moze po potrebi ukloniti (npr.ako su neprimjerenog
sadrzaja).
<!-- -->
user:
- može se samostalno registrirati
- može pregledati ponude putovanja
- može postavljati (dodavati) pitanja na već objavljena putovanja
- može se prijaviti na putovanje
- pregled historije putovanja (putovanja na koja je korisnik prijavljen, a
datum kraja putovanja je stariji od trenutnog datuma)
<!-- -->
Samo korisnici koji imaju status aktivan mogu se prijaviti na sistem.
Ostali korisnici koji nisu registrirani su gosti (posjetioci) i mogu samo pregledati
detaljne informacije o putovanjima i postavljena pitanja. Da bi korisnik mogao
postavljati pitanje ili izvršiti prijavu na putovanje mora se registrirarti i dobiti ulogu
user.
<!-- -->
Stranice za login i registraciju<br />
Preko login stranice na web aplikaciju se mogu prijaviti svi registrovani korisnici
koje je u sistem unio korisnik sa ulogom admin ili korisnik sa ulogom user koji se
sam registrirao. Na stranici za login osim forme za prijavu stoji link za
stranicu za registraciju preko koje se posjetilac (gost) moze registrirati.
Samostalnom registracijom korisnik dobija korisničku ulogu user.
Nakon uspješno izvršene prijave korisnika, u zavisnosti od njegove korisničke
uloge (admin ili user) sistem treba da ponudi odgovarajuće opcije za njegov daljni
rad.
<!-- -->



# 🎸 Prodavnica Muzičkih Instrumenata

Ovo je web aplikacija za online prodaju muzičkih instrumenata. Korisnici mogu pregledati ponudu instrumenata, dodati proizvode u korpu, kreirati nalog i izvršiti kupovinu.

---

## 🛠️ Tehnologije korištene u projektu

- **React** – za kreiranje korisničkog interfejsa
- **Tailwind CSS** – za brzu i responzivnu stilizaciju

---

## 📁 Struktura projekta

src/
│
├── components/ # Reusable UI komponente (npr. Navbar, Card, Footer)
├── context/ # Globalni konteksti (npr. korpa, korisnik)
├── pages/ # Stranice aplikacije (Home, Product, Checkout, itd.)
│
├── App.jsx # Glavna komponenta aplikacije
└── main.jsx # Ulazna tačka aplikacije

yaml
Copy
Edit

---

## 👥 Uloge korisnika

- **Gost (neulogovani korisnik):**
  - Može pregledati proizvode
  - Može dodati proizvode u korpu

- **Registrovani korisnik:**
  - Pristup svim funkcijama kao i gost
  - Mogućnost kreiranja naloga i logovanja
  - Pregled i upravljanje korpom
  - Započinjanje i finalizacija kupovine

- **Admin (buduće proširenje):**
  - Dodavanje/brisanje proizvoda
  - Upravljanje narudžbama i korisnicima

---

## ▶️ Upute za pokretanje projekta lokalno

1. Klonirajte repozitorij:
```bash
git clone https://github.com/korisnickoime/naziv-projekta.git
Uđite u direktorij projekta:

bash
Copy
Edit
cd naziv-projekta
Instalirajte zavisnosti:

bash
Copy
Edit
npm install
Pokrenite razvojni server:

bash
Copy
Edit
npm run dev
Otvorite u pretraživaču:
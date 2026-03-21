# Dmytro Kotykhin — Portfolio

![Next.js](https://img.shields.io/badge/NextJS-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-i18n-orange?logo=i18next&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-4-orange?logo=maildotru&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-EC5990?logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4-408AFF?logo=zod&logoColor=white)

Personal portfolio website built with Next.js 16, featuring a multi-language UI, animated sections, and a working contact form.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Internationalization:** next-intl (English / Ukrainian)
- **Contact Form:** EmailJS + React Hook Form + Zod
- **Icons:** React Icons
- **Linting / Formatting:** ESLint, Prettier

## Sections

- **Hero** — intro with animated content
- **About Me** — personal summary
- **Skills** — tech stack overview
- **Experience** — work history
- **Background** - education and hobbies
- **Contacts** — contact form + social links

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

```env
# Google Analytics
GOOGLE_DATA_ID=

# EmailJS (required for the contact form)
NEXT_PUBLIC_EMAIL_SERVICE_ID=
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command          | Description               |
| ---------------- | ------------------------- |
| `npm run dev`    | Start development server  |
| `npm run build`  | Build for production      |
| `npm run start`  | Start production server   |
| `npm run lint`   | Run ESLint                |
| `npm run format` | Format code with Prettier |

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com). Make sure to add the environment variables from `.env.local` in your Vercel project settings.

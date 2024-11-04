import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="py-20 max-w-6xl w-full mx-auto min-h-screen bg-white">
      <div className="flex flex-row items-center gap-4 pb-4">
        <Link href="/" className="text-blue-600 underline underline-offset-4">
          GitHub
        </Link>
        <span className="text-zinc-600 font-bold text-md">/</span>
        <Link href="/" className="text-blue-600 underline underline-offset-4">
          Instagram
        </Link>
        <span className="text-zinc-600 font-bold text-md">/</span>
        <Link href="/" className="text-blue-600 underline underline-offset-4">
          Telegram
        </Link>
        <span className="text-zinc-600 font-bold text-md">/</span>
        <Link href="/" className="text-blue-600 underline underline-offset-4">
          LinkedIn
        </Link>

        <div className="ml-auto flex flex-row items-center gap-4">
          <Link href="/" className="text-blue-600 underline underline-offset-4">
            Личный блог
          </Link>
          <span className="text-zinc-600 font-bold text-md">/</span>
          <Link href="/" className="text-blue-600 underline underline-offset-4">
            Контакные данные
          </Link>
        </div>
      </div>
      <div className="pt-2 flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <Image
            src={"/avatar.jpg"}
            alt="profile photo"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-zinc-800">
              Симаньков Никита Андреевич
            </h2>
            <p className="text-md font-bold text-zinc-600">
              Front-end разработчик
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-xl font-bold text-zinc-800">Личные проекты</p>
          <Link
            href="/"
            className="text-sm text-blue-600 underline underline-offset-4"
          >
            Показать все
          </Link>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="h-full p-6 border rounded-md flex flex-col gap-2">
            <Link
              href="/"
              className="text-blue-600 underline underline-offset-4"
            >
              PsychoPrisma - платформа психологического тестирования
            </Link>
            <p className="text-sm text-zinc-600">
              Программа психологического сопровождения и диагностики состояний
              военнослужащих Вооруженных Сил Республики Беларусь.
              <br />
              <br />
              Проект разрабатывался во время прохождения срочной службы, для
              участия в конкурсе, проводимого среди психологов Вооруженных Сил.
            </p>
            <p className="text-md font-bold text-zinc-800">Награды</p>
            <p className="text-zinc-600 text-sm">
              <span className="text-amber-400 font-bold">1-е место</span> -
              Северо-Западноe Оперативнoe Командованиe
            </p>
            <p className="text-zinc-600 text-sm">
              <span className="text-amber-600 font-bold">2-е место</span> -
              Центр психологических и социологических исследований
            </p>
            <div className="pt-2 text-sm flex flex-row items-center gap-4">
              <Link
                href="/"
                className="text-blue-600 underline underline-offset-4"
              >
                Домашняя страница
              </Link>
              <span className="text-zinc-600 font-bold text-md">/</span>
              <Link
                href="/"
                className="text-blue-600 underline underline-offset-4"
              >
                Исходный код
              </Link>
              <span className="ml-auto text-zinc-600 text-xs">
                03-07-2024 - 01-11-2024
              </span>
            </div>
          </div>
          <div className="h-full p-6 border rounded-md flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-blue-600 underline underline-offset-4"
              >
                Arc - язык программирования (в разработке)
              </Link>
              <p className="text-sm text-zinc-600">
                Интерпретируемый язык программирования со своей небольшой
                стандартной библиотекой, написанный на Go
                <br />
                <br />
                Проект разрабатывался целях углубления знаний в парсинге,
                лексическом анализе, структурах данных и алгоритмов.
              </p>
            </div>

            <div className="pt-2 text-sm flex flex-row items-center gap-4">
              <Link
                href="/"
                className="text-blue-600 underline underline-offset-4"
              >
                Домашняя страница
              </Link>
              <span className="text-zinc-600 font-bold text-md">/</span>
              <Link
                href="/"
                className="text-blue-600 underline underline-offset-4"
              >
                Исходный код
              </Link>
              <span className="ml-auto text-zinc-600 text-xs">
                04-11-2024 - настоящее время
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

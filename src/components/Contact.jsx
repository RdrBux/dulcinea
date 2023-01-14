import { useState } from 'react';
import InputContact from './InputContact';
import TextareaContact from './TextareaContact';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="bg-zinc-900 py-20 text-white">
      <div className="container grid items-center gap-20 lg:grid-cols-2 lg:gap-40">
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-6xl lg:text-5xl xl:text-7xl">
            CONTACTO
          </h2>
          <p className="-mt-4">
            Lorem ipsum dolor sit amet consectetur. Risus lacus semper sit
            placerat laoreet pulvinar vel.
          </p>
          <a
            href="mailto:dulcinea_mariana@hotmail.com"
            className="group flex items-center gap-2 text-rose-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <p className="text-white group-hover:underline">
              dulcinea_mariana@hotmail.com
            </p>
          </a>
          <a
            href="http://www.whatsapp.com"
            className="group flex items-center gap-2 text-rose-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22px"
              height="22px"
              fill="currentColor"
            >
              <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z" />
            </svg>
            <p className="text-white group-hover:underline">012 345 6789</p>
          </a>
          <a
            href="http://www.instagram.com"
            className="group flex items-center gap-2 text-rose-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              fill="currentColor"
            >
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
            </svg>
            <p className="text-white group-hover:underline">tu_instagram</p>
          </a>
          <a
            href="http://www.youtube.com"
            className="group flex items-center gap-2 text-rose-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25px"
              height="25px"
              fill="currentColor"
            >
              <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
            </svg>
            <p className="text-white group-hover:underline">tu_youtube</p>
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-medium">ENVIAR UN MENSAJE</h3>
          <InputContact
            label="Nombre completo"
            name="user_name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <InputContact
            label="Correo electrónico"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextareaContact
            label="Mensaje"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
          />
          <button className="boder-rose-300 w-fit border-2 border-rose-300 px-12 py-2 font-semibold duration-300 hover:bg-rose-300">
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
}

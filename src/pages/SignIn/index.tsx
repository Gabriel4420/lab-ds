import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react';
import * as atomic from '../../components/Atoms';
import * as mols from '../../components/Mols';
import axios from 'axios';

export default function SignIn() {

    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    const handleSignIn = async (event: FormEvent) => {
        event.preventDefault();

        await axios.post('/sessions', {
            email: 'diego@rocketseat.com.br',
            password: '12345678',
        })
        setIsUserSignedIn(true)
    }


    return (
        <div className="w-screen overflow-hidden h-screen bg-gradient-to-r from-grad-2 to-grad-1 flex flex-col items-center justify-center text-gray-100">
            <header className='flex flex-col items-center'>
                <atomic.Logo />

                <atomic.Heading size='lg' className='mt-1' >Ignite Lab</atomic.Heading>
                <atomic.Text size='lg' className='text-cyan-500 mt-1'>Faça o login e comece a usar!</atomic.Text>

            </header>

            <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
                {isUserSignedIn && <atomic.Text>Login realizado!</atomic.Text>}
                <label htmlFor="email" className='flex flex-col gap-3'>
                    <atomic.Text className='font-semibold'>Endereço de e-mail</atomic.Text>
                    <mols.TextInput.Root>
                        <mols.TextInput.Icon>
                            <Envelope />
                        </mols.TextInput.Icon>
                        <mols.TextInput.Input placeholder='Digite seu e-mail' />
                    </mols.TextInput.Root>
                </label>

                <label htmlFor="password" className='flex flex-col gap-3'>
                    <atomic.Text className='font-semibold'>Sua Senha</atomic.Text>
                    <mols.TextInput.Root>
                        <mols.TextInput.Icon>
                            <Lock />
                        </mols.TextInput.Icon>
                        <mols.TextInput.Input type="password" placeholder='*****' />
                    </mols.TextInput.Root>
                </label>

                <label htmlFor="remember" className='flex items-center gap-2'>
                    <mols.Checkbox id='remember' />
                    <atomic.Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</atomic.Text>
                </label>

                <atomic.Button className='mt-4' type="submit" size='sm'>Entrar na plataforma</atomic.Button>
            </form>

            <footer className="flex flex-col items-center gap-4 mt-8">
                <atomic.Text asChild size='sm'>
                    <a href="" className='text-gray-400 hover:underline hover:text-gray-200'>Esqueceu sua senha ?</a>
                </atomic.Text>
                <atomic.Text asChild size='sm'>
                    <a href="" className='text-gray-400 hover:underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
                </atomic.Text>
            </footer>
        </div>
    );
}

import { Envelope, Lock } from 'phosphor-react'
import { Button, Heading, Logo, Text } from './components/Atoms'
import { Checkbox, TextInput } from './components/Mols'
import './styles/global.css'


export function App() {
  return (
    <>
      <div className="w-screen bg-gradient-to-r from-grad-2 to-grad-1 h-screen flex flex-col items-center justify-center text-gray-100">
        <header className='flex flex-col items-center'>
          <Logo />

          <Heading size='lg' className='mt-1' >Ignite Lab</Heading>
          <Text size='lg' className='text-cyan-500'>Faça o login e comece a usar!</Text>

        </header>

        <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
          <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input placeholder='Digite seu e-mail' />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Sua Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type="password" placeholder='*****' />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id='remember' />
            <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
          </label>

          <Button className='mt-4' type="submit" size='sm'>Entrar na plataforma</Button>
        </form>
      </div>
    </>
  )
}


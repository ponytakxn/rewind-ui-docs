import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Button, Alert, AlertDescription, AlertHeader } from 'rewind-uikit';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Alert type='success' className='max-w-none text-center m-4'>
        <AlertHeader>Aquí empieza nuestro proyecto</AlertHeader>
        <AlertDescription>Por fin pude incluir los estilos por defecto!</AlertDescription>
      </Alert>
      <main className='flex flex-col mt-4 items-center'>
        <Button variant='ghost' color='info' size='lg'>
          Un lindo botoncito para empezar
        </Button>
      </main>
    </Layout>
  );
}

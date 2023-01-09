# Alura - Curso - React: React Router DOM

Esta solução é baseada no curso Alura - React Router DOM. 

## Índice

- [Visão geral](#visão-geral)
   - [Captura de tela](#captura-de-tela)
   - [Links](#links)
- [Meu processo](#meu-processo)
   - [Construído com](#construído-com)
   - [O que aprendi](#o-que-aprendi)
   - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
   - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)




## Visão Geral

### Captura de tela

<img src="/public//assets/imagens/FRONT.PNG" alt style="max-width: 100%">


### Links

- Solution URL: [GitHub](https://github.com/AIemao/React-Router-Alura)
- Live Site URL: [Vercel](https://react-router-alura.vercel.app/)

## Meu processo

### Construído com

- React
- React Router DOM


### O que aprendi

- Sistema de Rotas
- Links e Parametros de Rodas
- Outlet
- Rotas aninhadas

Router.js
````JS
        function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />         
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
````

### Desenvolvimento contínuo

Site Alura:
https://www.alura.com.br/

### Recursos úteis

- [Vercel](https://vercel.com/) - Deploy
- [React Rpiter](https://reactrouter.com/en/main)


## Autor

- Site - [Celio Junior](https://www.linkedin.com/in/celio-junior-152529193/)


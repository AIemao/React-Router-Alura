import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Alemão!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de programação e aluno da Alura
            </p>
            <p className={styles.paragrafo}>
            Minha história com programação começou na Instituição SENAC, quando realizei 2 cursos - Qualificação Profissional Técnica de Assistente de Desenvolvimento de Aplicativos Computacionais e FullStack. No começo da jornada aprendemos todo o caminho de concepção de um aplicativo. Desde Levantamento de Requisitos, MER, Diagramas até testes automatizados e deploy. Gostei tanto do curso que em seguida fiz outro curso no SENAC o de FullStack, nele reforçamos o conteúdo do curso anterior, porém com toda a aplicação back-end também, desde o uso do NODE com express conectando o front ao back. Também construirmos aplicação em C# juntamente com SQL Server.
            </p>
            <p className={styles.paragrafo}>
            No ensino superior, escolhi cursar Administração de Empresas. Porém, fui até o final, mas sempre de olho na área de programação. No entanto, olhando o curso de Ciência da Computação, não gostei pelo falo das aulas serem teorias e pouca prática na época que tinha feedback dos alunos deste curso. No SENAC, no entanto, partimos direto para teoria e mão na massa, sempre com desafios no final de cada aula para fixar ainda mais os conhecimentos adquiridos.
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, na empresa onde trabalho tive oportunidade de atuar em alguns cards que pude desenvolver.
            </p>
            <p className={styles.paragrafo}>
                E foi enquanto eu estava no trabalho e pude conversar abertamente com meu coordenador sobre o desejo nesta área, prontamente foi realizado uma call com o coordenador da área de programação para realizarmos algumas atividades de entrevista para alinharmos o meu conhecimento com as necessiadades do dia a dia de um dev na empresa. Após estas atividades já começei a integrar o time de dev e realizar alguns trabalhos no JIRA atraves de cards e tarefas.

            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. Desde o SENAC, sempre apredendo o que o mercado e a empresa necessia de conhecimentos, não somente de programação mas tambem no gestão de pessoas, processos de SCRUM e KANBAN e conhecimentos nos processos do JIRA.
            </p>
        </PostModelo>
    )
}
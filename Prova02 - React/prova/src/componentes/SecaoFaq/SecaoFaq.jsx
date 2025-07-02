import style from './SecaoFaq.module.css';

export default function SecaoFaq() {

    const faqs =[
    {
      pergunta: "Posso usar uma página de destino em vez de um site?",
      resposta: "Geralmente, os profissionais de marketing usam páginas de destino para ajudar os usuários a acessarem páginas web específicas por meio de um link presente em um e-mail, postagem de redes sociais ou anúncio. Embora elas possam não ser uma substituição adequada para um site, as páginas de destino são valiosas para alcançar objetivos de marketing de curto prazo. Por exemplo, você pode permitir que os usuários façam pedidos de itens em pré-venda ou se inscrevam para produtos de edição limitada por meio de uma página de destino."
    },
    {
      pergunta: "Como faço para criar uma página de destino sem um domínio?",
      resposta: "Você pode criar uma página de destino sem um domínio por meio do Mailchimp. Caso você ainda não tenha sua loja em pleno funcionamento ou venda em um mercado on-line, podemos auxiliá-lo na criação de uma URL para sua página de destino."
    },
    {
      pergunta: "Como faço o design de uma página de destino?",
      resposta: "Nosso criador de página de destino é semelhante ao criador de e-mail fácil de usar, permitindo que você arraste e solte os elementos de design que atendam às suas necessidades de marketing. Temos diversas páginas de destino pré-criadas que podem ajudar a divulgar sua mensagem, destacar novidades, oferecer um download especial e muito mais."
    },
    {
      pergunta: "Como faço para editar uma página de destino no Mailchimp?",
      resposta: "Se você precisar editar sua página de destino após a publicação, acesse Campaigns (Campanhas) e selecione All campaigns (Todas as campanhas). Procure a página de destino que você deseja editar e clique no menu suspenso ao lado dela. Há várias opções de edição que permitem alterar a URL, o design, as etiquetas e as configurações de rastreamento."
    }
  ];

  function showFaqs() {
    return (
        <>
            {faqs.map(faq => (
                // cada elemento em uma lista deve ter uma "key" única
                // box.icone é uma classe do Font Awesome, que já está importada - desenha o icone
                // style.icone é a classe complementar do CSS para estilizar o ícone
                <div key={faq.pergunta}>                    
                    <p className={style.perguntas}>{faq.pergunta}</p>
                    <p>{faq.resposta}</p>
                </div>
            ))}
        </>
    );
}

    return (
        <section className={style.secaoFaq}>
            <div>
                <h2>Perguntas Frequentes</h2>
            </div>

            <div> 
                {showFaqs()}
            </div>

        </section>
    )
}
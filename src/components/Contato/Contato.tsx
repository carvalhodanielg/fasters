import * as S from './ContatoStyle'

export const Contato = () => {
    return(
        <S.Contato>
            <h1>Contato</h1>

                <div className='wrapper'>
                        <div className='info'>
                            <div className='infoText'>
                                <h2>Telefone</h2>
                                <p>+55 (11) 3088-0757</p>
                                <h2>E-mail</h2>
                                <p>renee@reneetrajar.com.br</p>
                            </div>
                            <div className='infoCall'>
                                <h2>Atendimento Personalizado</h2>
                                <button>Clique Aqui!</button>
                            </div>
                        </div>

                        <div className='form'>
                            <div className='formInputs'>
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" type="text" placeholder='Nome' />

                                <label htmlFor="email">E-mail</label>
                                <input id='email' type="text" placeholder='E-mail' />

                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea id='mensagem' placeholder='Mensagem' />
                            </div>
                            <button>Enviar Mensagem!</button>
                        </div>
                    </div> 
        </S.Contato>
    )
}
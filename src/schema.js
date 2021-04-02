import * as Yup from 'yup';

export default Yup.object().shape({
    nome: Yup.string().min(2).required(<span className="erro">Nome obrigatorio</span>),
    cidade: Yup.string().min(3).required(<span className="erro">Cidade obrigatoria</span>),
    email: Yup.string().email().required(<span className="erro">E-mail obrigatorio</span>),
    nascimento: Yup.string().min(3).required(<span className="erro">Data nascimento obrigatorio</span>),
})
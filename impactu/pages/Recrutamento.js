import Script from 'next/script'
import Header from '../components/Header';
import RecruitmentForm from '../components/RecruitmentForm';
import Footer from '../components/Footer';

const Recrutamento = () => {
    return (
        <>
            <Header />
            <section className="recrutamento-hero-wrapper">
                <div className="recrutamento-hero-content">
                    <div className="recrutamento-title">
                        <h1><strong>Achas que tens<br />
                        o que é preciso?</strong>
                        </h1>
                    </div>
                    <div className="recrutamento-subtitle">
                        <h2>Estamos constantemente em busca de <br />
                        pessoas que queiram, como nós, fazer a <br />
                        diferença. Achas que tens o que é preciso?</h2>
                    </div>
                    <div className="space_button" href=''>
                        <a href="https://docs.google.com/forms/d/1zcyufYI4HtjwWEua-cY0QvN-FSmmzkecGd4pMBsxQY8/edit?usp=sharing"
                        className="recrutar_button" > Inscreve-te aqui!</a>
                    </div>
                </div>
            </section>
            <RecruitmentForm/>
            <Footer />
            <Script src="./scripts/app.js" />
        </>
    )
}

export default Recrutamento;
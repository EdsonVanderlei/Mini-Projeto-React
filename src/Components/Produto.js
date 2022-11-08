import React from 'react'
import { useParams } from 'react-router'
import Head from './Head'
import styles from './Produto.module.css'
const Produto = () => {
    const [produto,setProduto] = React.useState(null)
    const[loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState(null)
    const {id} = useParams();

    React.useEffect(()=>{

            const getProduct = async (url) =>{
                try{
                    console.log(id)
                    setError(null)
                    setLoading(true)
                    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
                    const json = await response.json()
                    setProduto(json)
                }
                catch(erro){
                    setError("Um erro ocorreu")
                }
                finally{
                    setLoading(false)
                }
            
             }

             getProduct()

    },[id])


    if(loading) return <div className="loading"></div>
    if(produto === null) return null
    if(error)  return <p>{error} </p>
    
    return (
    <section className={styles.produto + " animeLeft"}>

        <Head title={`Ranek | ${produto.id}`} />

        <div>{produto.fotos.map((foto)=> (<img key={foto.src} src={foto.src} alt={foto.titulo}></img>) )}</div>
        
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>R$ {produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>

            </div>

    </section>
  )
}

export default Produto
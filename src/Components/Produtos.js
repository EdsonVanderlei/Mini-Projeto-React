import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import styles from './Produtos.module.css'
const Produtos = () => {

  const [produtos, setProdutos] = React.useState(null)

  React.useEffect(() => {

    const getProducts = async () => {
      const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
      const json = await response.json()
      setProdutos(json)

    }

    getProducts()

  }, [])


  if (produtos === null) return null
  return (



    <section className={styles.produtos + " animeLeft"}>
      <Head title={`Ranek`} />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>

      ))}
    </section>
  )
}

export default Produtos
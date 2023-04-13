import React from 'react';
import styles from '../Galeria.module.scss';
import fotos from '../fotos.json';
import open from './open.png';
import favorito from './favorito.png';


export default function Cards({itens,styles}) {
    return (
        <ul className={styles.galeria__cards}>
                {fotos.map((item)=>{
                    return(
                        <li key={item.id} className={styles.galeria__card}>
                            <img
                                className={styles.galeria__imagem}
                                src={item.imagem}
                                alt={item.titulo}
                            />
                            <p className={styles.galeria__descricao}>{item.titulo}</p>
                            <div>
                                <p>{fotos.creditos}</p>
                                <span>
                                    <img src={favorito} alt='ícone de coracao curtir'/>
                                    <img src={open} alt='ícone de coracao curtir'/>

                                </span>
                            </div>

                        </li>
                    )
                })}
            </ul>
    )
}
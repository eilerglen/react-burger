import { FC } from "react";
import { BallTriangle }from "react-loader-spinner";
import styles from './loader.module.css'

interface ILoader {
    type?: 'default' | 'light';
 
}

const LoaderSpinner: FC<ILoader> = ({type = 'default'}) => {
    return (
        <>
            {type === 'default' ? (
                <div className={styles.overlay}>
                    <BallTriangle
                        color="#6f00cc" height={120} width={120}
                    />
                </div>
            ) : (
                <BallTriangle
                color="#6f00cc" height={120} width={120}
                />
            )}
            
        </>
    )
}

export default LoaderSpinner;
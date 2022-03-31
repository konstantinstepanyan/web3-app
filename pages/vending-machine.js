import Head from 'next/head';
import 'bulma/css/bulma.css';
import styles from '../styles/VendingMachine.module.css';

export default function VendingMachine() {
    return (
        <Head>
            <title>VendingMachine App</title>
            <meta name="description" content="A blockchain vending machine app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
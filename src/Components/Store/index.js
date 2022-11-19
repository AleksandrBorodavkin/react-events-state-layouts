import "./store-style.css"
import {useState} from 'react';
import IconSwitch from "../IconSwitch";
import CardsView from "../CardsVIew";
import ListView from "../ListView";
import products from "../db/products"


export default function Store() {
    const [icon, setIcon] = useState('view_module');
    const onSwitch = () => {
        setIcon((prevIcon) => {
            if (prevIcon === 'view_module') {
                return 'view_list';
            } else {
                return 'view_module';
            }

        })
    }
    return (
        <div className={'store'}>
            <header className={'store__header'}>
                <nav className={'store__menu'}>
                    <IconSwitch
                        icon={icon}
                        onSwitch={onSwitch}

                    />
                </nav>
            </header>

            <div className={'store__body'}>
                <ul className={'store__products' +
                    `${icon === 'view_module' ? ' store__products_cards-view' : ' store__products_list-view'}`}>
                    {icon === 'view_module' ? <CardsView cards={products}/> :
                        <ListView items={products}/>}
                </ul>
            </div>
        </div>

    )
}
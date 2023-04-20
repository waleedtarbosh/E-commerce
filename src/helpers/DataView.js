import BottomCardSection from "../Components/ProductCard/BottomCardSection";
import TopCardSection from "../Components/ProductCard/TopCardSection";

const DataView = ({ dataSource , containsMultiColors}) => {
    const products = dataSource.map(({ 
        disCount, 
        image, 
        title,
        price,
        oldPrice,
        rating,
        availableColors
    }) => (
        <>
            <TopCardSection 
                disCount={ disCount }
                image={ image }/>
            <BottomCardSection
                title={ title }
                price={ price }
                oldPrice={ oldPrice }
                rate={ rating.rate }
                count={ rating.count }
                availableColors={ containsMultiColors ? availableColors : null }/>
        </>
    ));

    return (
        <>
            { products }
        </>
    );
}

export default DataView;
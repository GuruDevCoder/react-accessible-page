export const priceRangeFormatter = {

    format(priceRange) {
        let output='';

        for (let i=0; i<priceRange; i++){
            output+='£';
        }

        return output;
    }
};


export const deliveryTimeFormatter = {

    format(deliveryTime) {
        return `${deliveryTime} minutes`;
    }
};


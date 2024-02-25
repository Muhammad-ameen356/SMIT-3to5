import Item from "./Item";

function List({ myName, productsData }) {
    const dataToShow = productsData.map((item) => {
        return (
            item.isFruit ?
                <Item item={item.title} itemId={item.id} />
                :
                <Item item={item.title} itemColor="red" itemId={item.id} />
        )
    })

    return (
        <>
            <h1>{myName}</h1>
            {["ameen", "ameen", "ameen"]}
        </>
    )
}

export default List;

{/* {productsData.map((item) => {
                return <Item item={item.title} />
            })} */}
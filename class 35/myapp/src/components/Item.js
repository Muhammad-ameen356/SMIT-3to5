function Item({ item, itemId, itemColor = "green" }) {
    return (
        <li style={{ backgroundColor: itemColor, marginTop: 10 }}>
            {item} {itemId}
        </li>
    )
}

export default Item;
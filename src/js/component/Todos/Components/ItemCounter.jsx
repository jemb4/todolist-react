import React from "react";

const ItemCounter = ({ counter }) => {
	return (
		<div className="items-counter">
			<small>
				{counter} {`${counter === 1 ? "item" : "items"}`} left
			</small>
		</div>
	);
};

export default ItemCounter;

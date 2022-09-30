import Interface from "./interfaces.js";
import Store from "./store_const.js";

const remove = (e) => {
    Interface.deleteBook(e.target);
    Store.removeBook(parseInt(e.target.id, 10));
};

export default remove;
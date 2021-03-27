const router = require("express-promise-router")();
const itemsService = require("../services/items.service");
const categoriesService = require("../services/categories.service");

/*Para evitar un segundo request al node la data para el breadcrumb se obtiene luego
de tener las categorias correspondientes y se devuelve en el mismo response
*/
router.get("/items", (req, res, next) => {
    itemsService.getItems(req.query.q).then(async(data)=>{
        const search = itemsService.adaptSearchResponse(data.data, req.author);
        /*Habia casos en las busquedas que la categoria se devolvia de la API en filters o available_filters
            findCategory recorre y busca en cual de ambos se encuentra el id y lo devuelve
        */
        const categoryId = categoriesService.findCategory(data.data);
        let breadcrumbData = await categoriesService.getCategoryInfo(categoryId);
        res.json({
            search: search,
            breadcrumbData: breadcrumbData.data.path_from_root
        });
    })
    .catch(e=>{
        return next(e);
    });
});

router.get("/items/:id", (req, res, next) => {
    itemsService.getItem(req.params.id).then(async(data)=>{
        const item = itemsService.adaptItemResponse(data, req.author);
        let breadcrumbData = await categoriesService.getCategoryInfo(item.item.category_id);
        res.json({
            item: item,
            breadcrumbData: breadcrumbData.data.path_from_root
        });
    }).catch(e=>{
        return next(e);
    });
});

module.exports = router;
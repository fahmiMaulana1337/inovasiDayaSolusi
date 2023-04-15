const { literal } = require('sequelize');
const { Product, Status, sequelize, Sequelize } = require('../models');

class Controller {
    static async getDataProduct(req, response) {
        try {
            const products = await Product.findAll({
                include: [Status]
              });
            response.status(200).json(products);

        } catch (error) {
            console.log(error)
            response.status(500).json(error);
        }
    }
    static async getDataProductById(req, response) {
        try {
            const id = req.params.id
            const data = await Product.findOne({
                where: {
                    id: id
                },
                include: [Status]
            });
            response.status(200).json(data);

        } catch (error) {
            console.log(error)
            response.status(500).json(error);
        }
    }
    static async addDataProduct(req, response) {
        try {

            const id = await Product.findOne(
                {
                    order:[['id','DESC']],
                    limit:1
                }
            )
            console.log(id.id)
            let { productID, productName, amount, customerName, status, transactionDate, createBy } = req.body;
            const createOn = new Date();
            amount= String(amount).replace(/[^0-9]/g, '');
           
            const data = await Product.create({
                id:id.id+1,
                productID,
                productName,
                amount,
                customerName,
                status,
                transactionDate,
                createBy,
                createOn
            });
            response.status(200).json(data);
        } catch (error) {
            console.log(error)
            response.status(500).json(error);
        }
    }

    static async editDataProduct(req, response) {
        try {
            const id = req.params.id;
            const { productID, productName, amount, customerName, status, transactionDate, createBy, createOn } = req.body;
            const data = await Product.update({
                productID,
                productName,
                amount,
                customerName,
                status,
                transactionDate,
                createBy,
                createOn
            }, {
                where: {
                    id: id
                }
            });
            response.status(200).json(data);
        } catch (error) {
            console.log(error)
            response.status(500).json(error);
        }
    }
}

module.exports = Controller;

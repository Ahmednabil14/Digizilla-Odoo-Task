from odoo import models, fields, api

class OrderTag(models.Model):
    _name = 'pos.order.tags'
    _description = 'POS Order Tag'
    _rec_name = 'tag'

    tag = fields.Char()
    color = fields.Integer()
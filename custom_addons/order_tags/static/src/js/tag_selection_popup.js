odoo.define('order_tags.TagSelectionPopup', function(require) {
    'use strict';
    const { useState } = owl;
    const AbstractAwaitablePopup = require('point_of_sale.AbstractAwaitablePopup');
    const Registries = require('point_of_sale.Registries');

    class TagSelectionPopup extends AbstractAwaitablePopup {
        setup() {
            super.setup();
            this.state = useState({
                selectedTags: this.props.selectedTags || []
            });
        }

        toggleTag(tagId) {
        const selectedTags = this.state.selectedTags.includes(tagId)
            ? this.state.selectedTags.filter(id => id !== tagId)
            : [...this.state.selectedTags, tagId];
        this.state.selectedTags = selectedTags;
    }

        confirm() {
            console.log("Selected Tags Before Confirm:", this.state.selectedTags);
            this.trigger('confirm', this.getPayload());
            super.cancel()
        }

        cancel() {
                super.cancel();
            }

        getPayload() {
            return this.state.selectedTags;
        }
}

    TagSelectionPopup.template = 'TagSelectionPopup';
    Registries.Component.add(TagSelectionPopup);
    return TagSelectionPopup;
});
// Override Settings
var bcSfSearchSettings = {
    search: {
        //suggestionMode: 'test'
    }
};

// Customize style of Suggestion box
BCSfFilter.prototype.customizeSuggestion = function(el) {
};

// Build number of Search result
BCSfFilter.prototype.buildSearchResultNumber = function(data) {
    var content = '';
    var searchTerm = getParam(this.searchTermKey);
    if (searchTerm != null) {
        var content = bcSfFilterConfig.label.search_result_number_other;
        if (data.total_product <= 1) {
            var content = bcSfFilterConfig.label.search_result_number_one;
        }
        content = content.replace(/{{ count }}/g, data.total_product).replace(/{{ terms }}/g, getParam(this.searchTermKey));
    }
    jQ('.' + this.class.searchResultNumber).html(content);
};
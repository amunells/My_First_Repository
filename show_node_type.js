function show_node_type(){

    var selected_node = get_first_selected_node
    var message = get_node_type(selected_node)
    messageBox.information(message)

}
function get_first_selected_node(){

    var my_node = selection.selectedNodes()[0]
    return my_node

}

function get_node_type(_node){

    var type_of_node = node.type(_node)
    return type_of_node
}

let input = prompt('What woud you like to do?');
const todos = ['Collect chicken eggs', 'clean litter'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************')
    } else if (input === 'new') {
        const newTodo = prompt('ok,what is the new todo?');
        todos.push(newTodo);
        console.log(' ${newTodo} added to the list')
    } else if (input === 'delete') {
        const index = parseInt(prompt('ok, enter an indexto delete '));
        if (Number.isNaN(index)) {


            const deleted = todos.splice(index, 1);
            console.log(`ok,deleted ${deleted[0]}`);
        } else {
            console.log('unknow  index')
        }
    }
    input = prompt('What would you like to do?');
}
console.log('Ok quit the App')
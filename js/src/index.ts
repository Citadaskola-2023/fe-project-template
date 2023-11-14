import './styles.css'; // Import your custom styles
import m from 'mithril';

export default function mount(root: Element) {
    m.mount(root, {
        view: function() {
            return m("h1", "Try me out")
        },
    });
}
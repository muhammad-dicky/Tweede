export default function RadioItems({ selectedDirection }) {
    return (
        <div>
            <h2>Selected Direction: {selectedDirection}</h2>
            {/* Render other components based on the selectedDirection value */}
            {selectedDirection === 'Value A' && <ComponentA />}
            {selectedDirection === 'Value B' && <ComponentB />}
        </div>
    );
}

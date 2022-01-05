// export default function SpaceCard(props) {
//   return (
//     <div className="Space">
//       {/* props is gathering of attributes (see spacecard) */}
//       <h2>{props.title}</h2>
//       <p>{props.content}</p>
//     </div>
//   );
// }

/**
 *
 * @param {object} props
 * @param {number} props.id Unique identifier
 * @param {string} props.title
 * @returns
 */
export default function SpaceCard({ id, title, content }) {
  return (
    <div className="Space">
      {/* props is gathering of attributes (see spacecard) */}
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

import React from 'react'
import TypeTile from './Type'
import PlacementTile from './Placement'
import RingTile from './Ring'

export default function SubmissionCellTile({
  item, tileStyle, config, zoom, userSettings,
}) {
  const zoomLimit = zoom >= config.submissionZoom
  return zoom >= (config.submissionZoom - 1) && (
    <>
      {(item?.placementCells?.rings && zoomLimit)
        && item.placementCells.rings.map(ring => (
          <RingTile
            key={ring.id}
            ring={ring}
            zoom={zoomLimit}
            userSettings={userSettings}
          />
        ))}
      {(item?.placementCells?.cells && zoomLimit)
        && item.placementCells.cells.map(cell => (
          <PlacementTile
            key={`pc${cell.id}-${cell.polygon[0]}-${cell.polygon[1]}-${cell.polygon[2]}-${cell.polygon[3]}`}
            cell={cell}
            tileStyle={tileStyle}
            zoom={zoomLimit}
            userSettings={userSettings}
          />
        ))}
      {item?.typeCells && item.typeCells.map(cell => (
        <TypeTile
          key={`tc${cell.id}-${cell.polygon[0]}-${cell.polygon[1]}-${cell.polygon[2]}-${cell.polygon[3]}`}
          cell={cell}
          tileStyle={tileStyle}
          zoom={zoom >= (config.submissionZoom - 1)}
          userSettings={userSettings}
        />
      ))}
    </>
  )
}

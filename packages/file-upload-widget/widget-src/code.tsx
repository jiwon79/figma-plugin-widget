const { widget } = figma
const { useEffect, useSyncedMap, useSyncedState, Text, AutoLayout, Rectangle } = widget

interface File {
  name: string
  content: string
  type: string
}

function Widget() {
  const [file, setFile] = useSyncedState<File>('file', { name: '', content: '', type: '' })

  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === 'SAVE_FILE') {
        console.log('PLUGIN -', msg)
        const content = msg.content
        const name = msg.name
        const type = msg.fileType;
        setFile({ name, content, type })
      }
      if (msg.type === 'DOWNLOAD_FILE') {
        figma.ui.postMessage({
          type: 'DOWNLOAD_FILE',
          content: file.content,
          name: file.name,
          fileType: file.type
        })
      }
    }
  })

  return (
    <AutoLayout>
      <Text
        fontSize={24}
        onClick={
          async () => new Promise((resolve) => {
              figma.showUI(__html__
                .toString()
                .replace('__MACRO__fileName', file.name)
                .replace('__MACRO__fileType', file.type)
              )
            })

        }
      >
        Open IFrame
      </Text>
      <Text>
        name : {file.name}
      </Text>
      <Text>
        type : {file.type}
      </Text>
      <Rectangle
        width={100}
        height={100}
        fill={'#000000'}
        onClick={
          () =>
            new Promise((resolve) => {
              figma.showUI(__html__)
            })
        }
      />

    </AutoLayout>
  )
}

widget.register(Widget)

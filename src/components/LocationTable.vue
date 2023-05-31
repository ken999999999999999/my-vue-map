<template>
  <div style="width: 1100px; margin: auto">
    <n-button
      strong
      secondary
      type="error"
      style="margin-bottom: 5px"
      @click="deleteSelected"
      :disabled="!checkedRowKeys.length"
      >Delete</n-button
    >
    <n-data-table
      :columns="columns"
      :data="locations"
      :pagination="pagination"
      :row-key="rowKey"
      @update:checked-row-keys="handleCheck"
    />
  </div>
</template>

<script>
import { ref, h } from "vue"
import { NDataTable, NButton } from "naive-ui"

export default {
  props: {
    locations: {
      type: Array,
      required: true,
    },
  },
  components: { NDataTable, NButton },

  setup(_, context) {
    const checkedRowKeysRef = ref([])

    const columns = [
      { type: "selection", key: "isChecked" },
      {
        title: "Location",
        key: "name",
      },
      {
        title: "Position",
        key: "position",
        render(row) {
          return `${row.position[0]}, ${row.position[1]}`
        },
      },
      {
        title: "Action",
        key: "actions",

        render(row) {
          return h(
            NButton,
            {
              size: "small",
              onClick: () => goto(row),
            },
            { default: () => "Go" }
          )
        },
      },
    ]

    const goto = (row) => {
      context.emit("goto", row.position)
    }

    const deleteSelected = () => {
      // Emit the delete event to the parent component

      context.emit("delete", checkedRowKeysRef.value)
      checkedRowKeysRef.value = []
    }

    return {
      columns,
      checkedRowKeys: checkedRowKeysRef,
      pagination: {
        pageSize: 5,
      },
      deleteSelected,
      rowKey: (row) => row.name,
      handleCheck(rowKeys) {
        checkedRowKeysRef.value = rowKeys
      },
    }
  },
}
</script>

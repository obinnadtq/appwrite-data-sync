import React from "react";


const StudentData = ({ students }) => {
  return (
    <div>
      <table class="table">
        <thead class="table-thead">
          <tr class="table-row">
            <th class="table-thead-col"><span class="eyebrow-heading-3">Serial No.</span></th>
            <th class="table-thead-col">
              <span class="eyebrow-heading-3">First Name</span>
            </th>
            <th class="table-thead-col">
              <span class="eyebrow-heading-3">Last Name</span>
            </th>
            <th class="table-thead-col">
              <span class="eyebrow-heading-3">Nationality</span>
            </th>
            <th class="table-thead-col">
              <span class="eyebrow-heading-3">Age</span>
            </th>
          </tr>
        </thead>
        <tbody class="table-tbody">
          {students && students.map((x, i) => {
            return (
              <tr class="table-row">
                <td class="table-col" data-title="SerialNo">
                  <div class="u-inline-flex u-cross-center u-gap-12">
                    <span class="text u-break-word u-line-height-1-5">{i + 1}</span>
                  </div>
                </td>
                <td class="table-col" data-title="FirstName">
                  <div><span class="text">{x.firstName}</span></div>
                </td>
                <td class="table-col" data-title="LastName">
                  <span class="text">{x.lastName}</span>
                </td>
                <td class="table-col" data-title="Nationality">
                  <span class="text">{x.nationality}</span>
                </td>
                <td class="table-col" data-title="Age">
                  <span class="text">{x.age}</span>
                </td>
              </tr>
            )

          })}

        </tbody>
      </table>

    </div>
  )
}
export default StudentData;
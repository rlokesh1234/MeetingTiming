            <div className='flex mt-12'>
              <div className='text-xs w-1/2 text-left'>
                Working Hours:{' '}
                <span className='bg-blue px-16 text-white hoursValue'>
                {apiData && apiData.staffId === data.StaffMeeting.staffId
                    ? apiData.meetingHours
                    : data.StaffMeeting.meetingHours.toFixed(0)}
                </span>
              </div>
              <div className='text-xs w-1/2 text-right'>
                Meeting Hours:{' '}
                <span className='bg-red px-16 text-white hoursValue'>
                {apiData && apiData.staffId === data.StaffMeeting.staffId
                    ? apiData.workingHours
                    : data.StaffMeeting.workingHours.toFixed(0)}
                </span>
              </div>
            </div>
            <div className='flex mt-12'>
              <div className='text-xs w-1/2 text-left'>
                Meetings Count:{' '}
                <span className='bg-orange px-16 text-white hoursValue'>
                {apiData && apiData.staffId === data.StaffMeeting.staffId
                    ? apiData.meetingsCount
                    : data.StaffMeeting.meetingsCount.toFixed(0)}
                </span>
              </div>
            </div>
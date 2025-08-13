import { useParams } from 'react-router'
import { patientData } from '@/components/PatientStatusTable/data/patient-data-updated'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router'



const ViewDetails = () => {
  const {id} = useParams()
  const patient = patientData.find((p) => p.id === id);
  const [firstName = '', lastName = ''] = patient!.name.split(' ')
  console.log(firstName)

  const patientFields =[
    ['Patient number',patient?.id],
    ['First name' , firstName],
    ['Last name', lastName],
    ['Street address',patient?.streetAddress],
    ['City',patient?.city],
    ['State, province or region',patient?.stateProvinceRegion],
    ['Country',patient?.country],
    ['Telephone number',patient?.telephoneNumber],
    ['Primary Contact email address',patient?.contactEmail]
  ]
  console.log(patient?.id)
  

  return (
      <div className='px-[30px] md:px-[100px] mt-[50px] flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-center'>Patient Details</h1>
        <div className='mt-[40px] mb-[50px]'>
          {
            patientFields.map((item)=>{
              return(
                <div className='flex flex-col md:flex-row md:gap-[100px] lg:gap-[200px] mb-6'>
                  <p className='w-[50%] font-bold'>{item[0]}</p>
                  <p className='text-start'>{item[1]}</p>
                </div>
              )
            })
          }
        </div>
        <div className='flex flex-col gap-[30px] justify-center md:flex-row md:gap-[100px] mb-[100px]'>
          <Link to={'/patient-status-board'}>
            <Button  variant="default"className="w-[185px] h-[68px] rounded-xl bg-[#32AA2A] text-white">
              Cancel
            </Button>
          </Link>
          <Link to={`/update-info/${id}`}>
            <Button  variant="default"className="w-[185px] h-[68px] rounded-xl bg-[#32AA2A] text-white">
              Update info
            </Button>
          </Link>
      </div>
      </div>

  )
}

export default ViewDetails
